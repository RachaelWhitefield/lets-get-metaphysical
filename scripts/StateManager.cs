using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class StateManager : MonoBehaviour
{

  
    [SerializeField] TextMeshProUGUI textComponent;
    [SerializeField] State startingState;
   

    State state;

    SpriteRenderer mySprite;
    // Start is called before the first frame update
    void Start()
    {
        state = startingState;
        textComponent.text = state.GetStateInfo();
        
    }


    public void ManageState() {
        textComponent.text = state.GetStateInfo();
    }
}
