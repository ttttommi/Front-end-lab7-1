import React, { Component } from "react";

class Content extends Component {
  toggleBackgroundColor = (event, class1, class2) => {
    const element = event.target;
    if (element.classList.contains(class1)) {
      element.classList.remove(class1);
      element.classList.add(class2);
    } else if (element.classList.contains(class2)) {
      element.classList.remove(class2);
      element.classList.add(class1);
    } else {
      element.classList.add(class1);
    }
  };

  render() {
    return (
      <div>
        <h2>Борисенко Таміла Олексіївна</h2>
        <p
          id="birthInfo"
          onClick={(e) =>
            this.toggleBackgroundColor(e, "blue-background", "green-background")
          }
        >
          <strong>Місце народження:</strong> 31 липня, 2005 року, м. Київ
        </p>
        <p
          id="educationInfo"
          onClick={(e) =>
            this.toggleBackgroundColor(e, "green-background", "blue-background")
          }
        >
          <strong>Освіта:</strong> СЗШ №74, м. Київ; НТУУ "КПІ", м. Київ
        </p>

        <h3>Хобі:</h3>
        <ul>
          <li>Читання</li>
          <li>Спортзал</li>
          <li>Танці</li>
          <li>Кулінарія</li>
        </ul>

        <h3>Улюблені книги:</h3>
        <ol>
          <li>"Гра престолів", Джордж Мартін</li>
          <li>"Суджені", Джон Маррс</li>
          <li>"Хірург", Тесс Ґеррітсен</li>
        </ol>
        <h3>Опис улюбленого міста: Львів</h3>
    <p>Львів — це культурна столиця України, яка зачаровує своїми архітектурними шедеврами, вузькими середньовічними вуличками та неповторною атмосферою. Засноване у 1256 році, місто має довгу і багату історію, яка відображається у його будівлях та площах.</p>

    <p>Однією з найвідоміших архітектурних пам'яток Львова є Площа Ринок, яка є серцем міста. Оточена різноманітними історичними будівлями, вона є улюбленим місцем як для місцевих жителів, так і для туристів. Відвідувачі можуть насолодитися чудовими кафе, ресторанами та музеями.</p>

    <p>Львів також славиться своїми численними соборами, серед яких Домініканський собор, Вірменська церква та Латинський катедральний собор. Кожен з них має унікальну архітектуру і відображає багатокультурне минуле міста.</p>

    <p>Місто славиться своєю кавовою культурою, адже Львів часто називають "кавовою столицею" України. Безліч кав'ярень, де подають ароматну львівську каву, створюють неповторну атмосферу для спокійного відпочинку в центрі міста.</p>

  
      </div>
    );
  }
}

export default Content;
