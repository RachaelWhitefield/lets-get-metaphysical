using UnityEngine;
using UnityEngine.Events;
using System.Collections;
using UnityEngine.UI;

public class Trigger : MonoBehaviour
{

    
   
    // public Rigidbody2D triggerBody; 
    public UnityEvent onTriggerEnter;
    public UnityEvent OnTriggerExit;
   
    SpriteRenderer mySprite;
  

    void Start() {
        mySprite = GetComponent<SpriteRenderer>();

    }

    void OnTriggerEnter2D(Collider2D other){
        //do not trigger if there's no trigger target object
        if (other == null) return;

        if(other.tag == "trigger") {
            onTriggerEnter.Invoke();
            mySprite.enabled = true;
        }
    }

    void OnTriggerExit2D(Collider2D other) {
        if (other.CompareTag("trigger")) {
            mySprite.enabled = false;
        }
    }

    }


