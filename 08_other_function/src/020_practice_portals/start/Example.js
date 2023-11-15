import { useState } from "react";
import Toast from "./components/Toast";
import { createPortal } from "react-dom";

const Example = () => {
  const [toastOpen, setToastOpen] = useState(false);
  const ToastPortal = ({ children }) => {
    return createPortal(children, document.querySelector(".container.start"))
  };

  return (
    <div>
      <h3>
        トーストの作成（createPortal）
      </h3>
      <p>ボタンを押すと.container.start要素にマウントされて、表示されるトーストを作成してください。トーストにはToastコンポーネントを使用してください。</p>

      <div className="container start"></div>

      <button
        type="button"
        onClick={() => setToastOpen(true)}
        disabled={toastOpen}
      >
        トーストを表示する
      </button>
      {toastOpen && (
        <ToastPortal>
          <Toast
            visible={toastOpen}
            handleCloseClick={() => setToastOpen(false)}
          />
        </ToastPortal>
      )}
    </div>
  );
};

export default Example;
