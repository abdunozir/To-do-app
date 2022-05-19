import "./Lists.scss";
import Button from "@mui/material/Button";

function Lists({ arr, setArr, showArr, setShowArr }) {
  const del = (id) => {
    setArr(arr.filter((el) => el.id !== id));
  };

  const checkIt = (id) => {
    setArr(
      arr.map((el) => {
        if (el.id === id) {
          el.isTrue = !el.isTrue;
          return el;
        }
        return el;
      })
    );
  };

  return (
    <div className="Lists">
      {showArr.map((el, i) => {
        return (
          <div class="list-group1">
            <p href="#" class="list-group-item list-group-item-action">
              <span className={`${el.isTrue ? "underline" : ""}`}>
                {el.text}
              </span>
              <div className="lists__btn">
                <Button
                  variant="outlined"
                  onClick={() => checkIt(el.id)}
                  startIcon={
                    <i
                      class={`bi bi-check-circle-fill ${
                        el.isTrue ? "checked" : ""
                      }`}
                    ></i>
                  }
                >
                  Complated
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => del(el.id)}
                  startIcon={<i class="bi bi-trash3-fill"></i>}
                  color="error"
                >
                  Delete
                </Button>
              </div>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Lists;
