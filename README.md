# datetime-bug-repro
ionic capacitor datetime-bug-repro


```
const now = new Date("2023-10-30T11:08:09.538Z");
const monthLater = new Date("2023-11-27T11:08:09.538Z");


  <IonDatetimeButton datetime="datetime" />
      <IonPopover keepContentsMounted>
        <IonDatetime
          id="datetime"
          min={now.toISOString()}
          max={monthLater.toISOString()}
        />
      </IonPopover>

```




https://github.com/RobertZetterlund/datetime-bug-repro/assets/31474146/6a6a289e-499e-44d7-82d1-9454a17c703a

