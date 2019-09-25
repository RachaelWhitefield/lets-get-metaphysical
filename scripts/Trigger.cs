using UnityEngine;
using UnityEngine.Events;
using System.Collections;
using UnityEngine.UI;

public class Trigger : MonoBehaviour
{

    
    public UnityEvent onTriggerEnter;
    public UnityEvent OnTriggerExit;
   
    SpriteRenderer mySprite;
    Panel panel;
  

    void Start() {
        mySprite = GetComponent<SpriteRenderer>();

    }

    void OnTriggerEnter2D(Collider2D other){
        panel = FindObjectOfType<Panel>();
        //do not trigger if there's no trigger target object
        if (other == null) return;

        if(other.tag == "trigger") {
            onTriggerEnter.Invoke();
            panel.ShowPanel();
        }
    }

    void OnTriggerExit2D(Collider2D other) {
        panel = FindObjectOfType<Panel>();
        if (other.CompareTag("trigger")) {
            panel.HidePanel();
        }
    }

    }


