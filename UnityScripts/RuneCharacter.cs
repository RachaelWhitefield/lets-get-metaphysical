using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class RuneCharacter : MonoBehaviour
{
    [SerializeField] public Image runeCharacter;
   
    void Start() {
        runeCharacter.enabled = false;
    }


    void OnTriggerEnter(Collider other) {
        if (other.CompareTag("Rune")) {
            runeCharacter.enabled = true;
        }
    }

    void OnTriggerExit(Collider other) {
        if (other.CompareTag("Rune")) {
            runeCharacter.enabled = false;
        }
    }
}
