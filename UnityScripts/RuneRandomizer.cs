using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class RuneRandomizer : MonoBehaviour
{
   
    [SerializeField] Sprite[] runeCharacter;
    // [SerializeField] int rune;
    public string currentRune;
   
    SpriteRenderer mySprite;
    StateManager stateManager;
    //  StateManager stateManager;
   
    void Start() {
        mySprite = GetComponent<SpriteRenderer>();
    }


    public void OnTriggerEnter2D(Collider2D other){
        RandomizeRune();
         stateManager = FindObjectOfType<StateManager>();
            stateManager.ManageState();  
        //    Debug.Log(currentRune);
     }
    

   public void RandomizeRune() {
      
           var arrayNum = UnityEngine.Random.Range(0, runeCharacter.Length);
           Sprite runeSprite = runeCharacter[arrayNum];
           string runeName = runeSprite.name;
           GetComponent<SpriteRenderer>().sprite = runeSprite;
           currentRune = runeName;

   }


}
