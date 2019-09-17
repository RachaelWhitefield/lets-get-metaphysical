using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class RuneRandomizer : MonoBehaviour
{
    [SerializeField] Sprite[] runeCharacter;
   
    SpriteRenderer mySprite;
   
    void Start() {
        mySprite = GetComponent<SpriteRenderer>();
    }

     void OnTriggerEnter2D(Collider2D other){
         RandomizeRune();
     }
    

   public void RandomizeRune() {
      
           GetComponent<SpriteRenderer>().sprite = runeCharacter[UnityEngine.Random.Range(0, runeCharacter.Length)];

   }

   private void OnMouseDown(){
     
}


}
