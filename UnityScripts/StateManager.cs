using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class StateManager : MonoBehaviour
{

    [SerializeField] Text textComponent;
    [SerializeField] State startingState;

    
   

    State state;
    RuneRandomizer runeRandomizer;

    SpriteRenderer mySprite;
    // Start is called before the first frame update
    void Start()
    {
        state = startingState;
        textComponent.text = state.GetStateInfo();
        runeRandomizer = GameObject.FindObjectOfType<RuneRandomizer>();
    }


    void Update()
    {
        // ManageState();
    }

    public void ManageState() {
        var nextStates = state.GetNextState();

        string thisRune = runeRandomizer.currentRune;

        Debug.Log(thisRune);

        



        if(thisRune == "a") {
            state = nextStates[0];
        } else if(thisRune == "b") {
            state = nextStates[1];
        } else if(thisRune == "d") {
            state = nextStates[2];
        } else if(thisRune == "f") {
            state = nextStates[3];
        } else if(thisRune == "g") {
            state = nextStates[4];
        }
        textComponent.text = state.GetStateInfo();
    }
}
