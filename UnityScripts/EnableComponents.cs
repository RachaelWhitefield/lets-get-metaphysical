using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class EnableComponents : MonoBehaviour
{

    // public Rigidbody2D triggerBody;
    // public UnityEvent OnTriggerEnter;
    // SpriteRenderer mySprite;
    // Light myLight;

    // void Start() {
        // myLight = GetComponent<Light>();
        // mySprite = GetComponent<SpriteRenderer>();
    // }
    // Update is called once per frame
    // void Update()
    // {
    //    if(Input.GetKeyUp(KeyCode.Space)) {
    //        myLight.enabled = !myLight.enabled;
    //    } 
    // }

    private void OnTriggerEnter2D(Collider2D collision) {
    //    if (triggerBody == null) return;

    //    var hitRb = other.attachedRigidbody;
    //    if (hitRb == triggerBody) {
          SceneManager.LoadScene(0);
        //    OnTriggerEnter.Invoke();
       }
    }

