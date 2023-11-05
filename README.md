Debouncing:
    typing slow : the difference between the key stroke is high - 200ms 
    typing fast : the difference between the key stroke is less - 30ms

Performance :
    iphone pro max - 14 letters - if 1000 people are searching then there will be 14000 api calls 
    with debouncing 3 api calls and for 1000 people 3000 calls
    hence huge bump in performance 

debouncing with 200 ms
    if difference between 2 key strokes is less than 200ms I should decline the api call 
    if it is greater than 200 ms make an api call 
    

