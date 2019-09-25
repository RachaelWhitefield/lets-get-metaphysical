
using UnityEngine;
<<<<<<< HEAD
=======
using UnityEngine.UI;
>>>>>>> 9e5d89f3c101bfe86f2513ca39f5d87ff7f97bb0
using TMPro;

public class RuneRandomizer : MonoBehaviour
{
   
    [SerializeField] Sprite[] runeCharacter;
   
    public string currentRune;
<<<<<<< HEAD
    
=======
    // [SerializeField] Text textComponent;
>>>>>>> 9e5d89f3c101bfe86f2513ca39f5d87ff7f97bb0
    [SerializeField] TextMeshProUGUI textComponent;
    [SerializeField] State startingState;
   
    SpriteRenderer mySprite;
    
    State state;
   
   
    void Start() {
        mySprite = GetComponent<SpriteRenderer>();
        state = startingState;
        textComponent.text = state.GetStateInfo();
    }


    public void OnTriggerEnter2D(Collider2D other){
        RandomizeRune();
        //    Debug.Log(currentRune);
     }

     public void OnTriggerExit2D(Collider2D other) {
          GetComponent<SpriteRenderer>().sprite = null;
          currentRune = null;
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
        } else if(currentRune == "h") {
            state = nextStates[5];
        } else if(currentRune == "i") {
            state = nextStates[6];
        } else if(currentRune == "j") {
            state = nextStates[7];
        } else if(currentRune == "k") {
            state = nextStates[8];
        } else if(currentRune == "l") {
            state = nextStates[9];
        } else if(currentRune == "m") {
            state = nextStates[10];
        } else if(currentRune == "n") {
            state = nextStates[11];
        } else if(currentRune == "o") {
            state = nextStates[12];
        } else if(currentRune == "p") {
            state = nextStates[13];
        } else if(currentRune == "q") {
            state = nextStates[14];
        } else if(currentRune == "r") {
            state = nextStates[15];
        } else if(currentRune == "s") {
            state = nextStates[16];
        } else if(currentRune == "t") {
            state = nextStates[17];
        } else if(currentRune == "u") {
            state = nextStates[18];
        } else if(currentRune == "v") {
            state = nextStates[19];
        } else if(currentRune == "w") {
            state = nextStates[20];
        } else if(currentRune == "x") {
            state = nextStates[21];
        } else if(currentRune == "c") {
            state = nextStates[22];
        } else if(currentRune == "e") {
            state = nextStates[23];
        } 
            
        textComponent.text = state.GetStateInfo();

    } else {
        Debug.Log("No such Item");
    }

    }


}
