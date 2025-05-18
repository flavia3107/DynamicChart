import React, { useState } from "react";

interface DataInputProps {
  rawData: string;
  setRawData: (data: string) => void;
  setParsedData: (data: { labels: string[]; values: number[] }) => void;
}

const DataInput: React.FC<DataInputProps> = ({ rawData, setRawData, setParsedData }) => {
  const [error, setError] = useState<string | null>(null);

  const handleParse = () => {
    try {
      const lines = rawData.trim().split("\n");
      const [, ...dataRows] = lines;

      const labels: string[] = [];
      const values: number[] = [];

      for (const row of dataRows) {
        const [label, value] = row.split(",");
        if (!label || isNaN(Number(value))) {
          throw new Error("Invalid row format. Expected 'Label,Value'");
        }
        labels.push(label.trim());
        values.push(Number(value.trim()));
      }

      setParsedData({ labels, values });
      setError(null);
    } catch (err: any) {
      setError(err.message || "Failed to parse input");
    }
  };

  return (
    <div className="data-input">
      <label htmlFor="data-textarea">Enter CSV Data:</label>
      <textarea
        id="data-textarea"
        value={rawData}
        onChange={(e) => setRawData(e.target.value)}
        rows={8}
        cols={40}
        placeholder="Label,Value\nApples,10\nBananas,20"
      />
      <br />
      <button onClick={handleParse}>Parse & Preview Chart</button>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default DataInput;
