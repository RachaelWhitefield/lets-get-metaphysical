using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class InputManager : MonoBehaviour
{

    //config params
    private bool draggingItem = false;
    private GameObject draggedObject;
    private Vector2 touchOffset;

    // Update is called once per frame
    void Update()
    {
        if (HasInput && CompareTag("Rune")) {
            DragOrPickUp();
        } else {
            if (draggingItem)
                DropItem();
        }
    }

    Vector2 CurrentTouchPosition {
        get {
            Vector2 inputPos;
            inputPos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
            return inputPos;
        }
    }

    private void DragOrPickUp() {
        var inputPosition = CurrentTouchPosition;

        if (draggingItem) {
            draggedObject.transform.position = inputPosition + touchOffset;
        } else {
            RaycastHit2D[] touches = Physics2D.RaycastAll(inputPosition, inputPosition, 0.5f);
            if (touches.Length > 0) {
                var hit = touches[0];
                if (hit.transform != null) {
                    draggingItem = true;
                    draggedObject = hit.transform.gameObject;
                    touchOffset = (Vector2)hit.transform.position - inputPosition;
                    draggedObject.transform.localScale = new Vector3(.3f,.3f,.3f);
                }

            }
        }
    }

    private bool HasInput {
        get {
            return Input.GetMouseButton(0);
        }
    }

    void DropItem() {
        draggingItem = false;
        draggedObject.transform.localScale = new Vector3(.25f,.25f,.25f);
    }
}
