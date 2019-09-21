using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class RuneRandomizer : MonoBehaviour
{
   
    [SerializeField] Sprite[] runeCharacter;
    // [SerializeField] int rune;
    public string currentRune;
    [SerializeField] Text textComponent;
    [SerializeField] State startingState;
   
    SpriteRenderer mySprite;
    // StateManager stateManager;
    State state;
    //  StateManager stateManager;
   
    void Start() {
        mySprite = GetComponent<SpriteRenderer>();
        state = startingState;
        textComponent.text = state.GetStateInfo();
    }


    public void OnTriggerEnter2D(Collider2D other){
        RandomizeRune();
        //    Debug.Log(currentRune);
     }
    

   public void RandomizeRune() {
      
           var arrayNum = UnityEngine.Random.Range(0, runeCharacter.Length);
           Sprite runeSprite = runeCharacter[arrayNum];
           string runeName = runeSprite.name;
           GetComponent<SpriteRenderer>().sprite = runeSprite;
           currentRune = runeName;

   }

private void OnMouseOver() {

    if(currentRune != null) {
    //  stateManager = FindObjectOfType<StateManager>();
         var nextStates = state.GetNextState();

        if(currentRune == "a") {
            state = nextStates[0];
        } else if(currentRune == "b") {
            state = nextStates[1];
        } else if(currentRune == "d") {
            state = nextStates[2];
        } else if(currentRune == "f") {
            state = nextStates[3];
        } else if(currentRune == "g") {
            state = nextStates[4];
        }
            
        textComponent.text = state.GetStateInfo();


        //    Debug.Log(currentRune);
    } else {
        Debug.Log("No such Item");
    }

    }


}
