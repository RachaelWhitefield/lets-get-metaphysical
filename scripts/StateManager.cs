using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class StateManager : MonoBehaviour
{

    [SerializeField] Text textComponent;
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
    



        // if(thisRune == "a") {
        //     state = nextStates[0];
        // } else if(thisRune == "b") {
        //     state = nextStates[1];
        // } else if(thisRune == "d") {
        //     state = nextStates[2];
        // } else if(thisRune == "f") {
        //     state = nextStates[3];
        // } else if(thisRune == "g") {
        //     state = nextStates[4];
        // }
        textComponent.text = state.GetStateInfo();
    }
}
