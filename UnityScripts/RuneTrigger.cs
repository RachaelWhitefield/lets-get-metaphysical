using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class RuneTrigger : MonoBehaviour
{

    //config params

  public Sprite mySprite;
  public Rigidbody2D triggerBody;
  public UnityEvent onTriggerEnter;
  
    //cache ref
   
   void Start() {
       mySprite = GetComponent<SpriteRenderer>().sprite;
   }

   void Update() {
      if(Input.GetKeyUp(KeyCode.Space)) {
          mySprite.enabled = !mySprite.enabled;
      }
   }



}

    


