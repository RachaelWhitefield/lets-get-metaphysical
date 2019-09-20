using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class StateManager : MonoBehaviour
{

    [SerializeField] Text textComponent;
    [SerializeField] State startingState;
    public string rune;

    State state;
    RuneRandomizer runeRandomizer;

    SpriteRenderer mySprite;
    // Start is called before the first frame update
    void Start()
    {
        state = startingState;
        textComponent.text = state.GetStateInfo();
    
    }


    void Update()
    {
        // ManageState();
    }

    private void ManageState() {
        // var nextStates = state.GetNextState();

        // string v = runeRandomizer.GetCurrentRune();
        // rune = v; 
        // if(rune != null) {
       
        // Debug.Log(rune);

        // }



    //     if(Input.GetKeyDown(KeyCode.Alpha1)) {
    //         state = nextStates[0];
    //     } else if(Input.GetKeyDown(KeyCode.Alpha2)) {
    //         state = nextStates[1];
    //     } else if(Input.GetKeyDown(KeyCode.Alpha3)) {
    //         state = nextStates[2];
    //     }
    //     textComponent.text = state.GetStateInfo();
    }
}
