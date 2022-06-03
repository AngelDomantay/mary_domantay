import React from "react"
import styles from "../Modal/module.css"
import { RiCloseLine } from "react-icons/ri"

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className={styles.darkBG}

        style={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          width: "100vw",
          height: "100vh",
          zIndex: "0",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          position: "absolute"
        }}
        onClick={() => setIsOpen(false)} />

      <div className={styles.centered}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}>

        <div className={styles.modal}

          style={{
            width: "250px",
            height: "170px",
            background: "white",
            color: "white",
            zIndex: "10",
            borderRadius: "16px",
            boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.04)"
          }}  >

          <div className={styles.modalHeader} style={{
            height: "50px",
            background: "white",
            overflow: "hidden",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px"
          }}>

            <h5 className={styles.heading} style={{
              margin: "0",
              padding: "20px 10px",
              color: "#2c3e50",
              fontWeight: "500",
              fontSize: "18px",
              textAlign: "center"
            

            }}>Instructions</h5>
          </div>
          <button className={styles.closeBtn}

            style={{
              cursor: "pointer",
              fontWeight: "500",
              padding: "4px 8px",
              borderRadius: "8px",
              border: "none",
              fontSize: "18px",
              color: "#2c3e50",
              background: "white",
              transition: "all 0.25s ease",
              boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.06)",
              position: "absolute",
              right: "0",
              top: "0",
              alignSelf: "flex-end",
              marginTop: "-7px",
              marginRight: "-7px"
            }}
            onClick={() => setIsOpen(false)}>

            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}
            style={{
              padding: "0px 20px",
              fontSize: "14px",
              color: "#2c3e50",
              textAlign: "center"
            }}>
            Choose which word among the choices has the best synonym for the set of words given.
          </div>
          <div className={styles.modalActions}
            style={{
              position: "absolute",
              bottom: "2px",
              width: "100%"
            }}>

            <div className={styles.actionsContainer}

              style={{
                display: "flex",
                justifyContent: "space-around",
                 alignItems: "center"
              }}>

            <button className={styles.deleteBtn}
              style={{
                marginTop: "30px",
                cursor: "pointer",
                fontWeight: "500",
                padding: "11px 28px",
                borderRadius: "12px",
                fontSize: "0.8rem",
                border: "none",
                color: "#fff",
                background: "#34d15e",
                transition: "all 0.25s ease"
              }}
              onClick={() => setIsOpen(false)}>
             Got it!
            </button>
           
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Modal;