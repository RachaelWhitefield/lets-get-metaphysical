using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class StateManager : MonoBehaviour
{

<<<<<<< HEAD
  
=======
    // [SerializeField] Text textComponent;
>>>>>>> 9e5d89f3c101bfe86f2513ca39f5d87ff7f97bb0
    [SerializeField] TextMeshProUGUI textComponent;
    [SerializeField] State startingState;
   

    State state;

    SpriteRenderer mySprite;
    // Start is called before the first frame update
    void Start()
    {
        state = startingState;
        textComponent.text = state.GetStateInfo();
        
    }


    public void ManageState() {
        textComponent.text = state.GetStateInfo();
    }
}
