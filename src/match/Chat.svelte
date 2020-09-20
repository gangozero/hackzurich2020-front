<script>
    import {Block,Button} from 'svelte-atoms';
    import {router} from 'tinro';

    let chats = [
        {
            "type": "RECIPE",
            "data": {
                "recipe": {
                    "name": "Wirz-Bergkäse-Capuns",
                    "id": "0dec7ea8-77d9-4c1b-a148-b210dfbfa63a",
                    "imageURL": "https://recipeimages.migros.ch/medium/9068d9266db917729e19b4d974d0d40615e05970/wirz-bergkaese-capuns-0-1-1.jpg",
                    "partnerName": "Alex",
                    "partnerDistance": 50,
                    "steps": "Für die Füllung Mehl, Salz und Majoran in eine Schüssel geben. Wasser und Crème fraîche vermischen und dazugiessen. Mit einer Kelle anrühren. Eier verquirlen und beigeben. Teig weiterschlagen, bis er Blasen wirft. Ca. 30 Minuten ruhen lassen.\n12 grosse Wirzblätter ablösen. Wirzblätter in siedendem Salzwasser ca. 1 Minute blanchieren. Herausheben und eiskalt abschrecken. Abtropfen lassen. Von den Blättern dicke Blattrippen keilförmig herausschneiden. Blätter auf einem Küchentuch auslegen. Vom Käse 12 Stängelchen schneiden. Restlichen Käse würfeln und beiseitestellen. Je 2 EL Füllung in die Mitte jedes Blattes geben und mit einem Käsestängelchen belegen. Längsseiten der Blätter auf die Füllung umlegen. Blätter mit sanftem Druck zu Capuns aufrollen. In eine weite Pfanne legen, Bouillon dazugiessen. Zugedeckt bei kleiner bis mittlerer Hitze ca. 15 Minuten garen. Garflüssigkeit in eine Pfanne abgiessen. Capuns warm halten.",
                    "ingredients": [
                        {
                            "productID": "16243",
                            "name": "rote Zwiebel",
                            "isMissed": false,
                            "ownerName": "Andrey"
                        },
                        {
                            "productID": "16832",
                            "name": "Bergkäse",
                            "isMissed": false,
                            "ownerName": "Alex"
                        },
                        {
                            "productID": "88017",
                            "name": "grilliertes Spanferkel",
                            "isMissed": false,
                            "ownerName": "Alex"
                        },
                        {
                            "productID": "17265",
                            "name": "Honig",
                            "isMissed": true
                        }
                    ]
                }
            }
        },
        {
            "type": "INGREDIENT",
            "data": {
                "missedIngredients": [
                    {
                        "productID": "17265",
                        "name": "Honig",
                        "delivery": 2,
                        "shop":"Hardturmstrasse 11, 8005 Zürich"
                    }
                ]
            }
        },
        {
        "type": "MESSAGE",
        "data": {
            "message" : "When do you want to do it?"
        }
    }
    ]
   

</script>

<Block type="block1">
    <h2>Recipe chat</h2>
    {#each chats as chat}
        <p>
            <Block type="block3">
                Hello
            </Block>
        </p>
    {/each}
</Block>

<style>
   
</style>