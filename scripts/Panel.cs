
using UnityEngine;

public class Panel : MonoBehaviour
{
    
    
    SpriteRenderer mySprite;
    Fade fade;
    // Start is called before the first frame update
    void Start()
    {
        mySprite = GetComponent<SpriteRenderer>();
    }

    public void ShowPanel() {
        fade = FindObjectOfType<Fade>();
        fade.ObjectFade(true, 1.25f);
        
    }

    public void HidePanel() {
        fade = FindObjectOfType<Fade>();
        fade.ObjectFade(false, 1.25f);
        
    }
}
