import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const ByRaiting = () => {
  return (
    <details>
      <summary>Raiting</summary>
      <div>
        <h3><input type="checkbox"/>Best</h3>
        <h3><input type="checkbox"/>bads</h3>
      </div>
    </details>
  );
};

export default ByRaiting;
