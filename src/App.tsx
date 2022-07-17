import { Component } from "solid-js";

import styles from "./App.module.css";
import Icon from "./assets/components/Icon";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Icon/>
    </div>
  );
};

export default App;
