const dishes=[
  [
    "margherita",
    "Пицца",
    "Маргарита",
    490
  ],
  [
    "ham",
    "Пицца",
    "С ветчиной и грибами",
    620
  ],
  [
    "mushrooms",
    "Пицца",
    "С белыми грибами и трюфелем",
    790
  ],
  [
    "parma-gorgonzola",
    "Пицца",
    "Парма горгонзола",
    790
  ],
  [
    "parma-rocket",
    "Пицца",
    "Парма с руколой",
    760
  ],
  [
    "mista",
    "Пицца",
    "Миста",
    959
  ],
  [
    "diavola",
    "Пицца",
    "Дьявола",
    760
  ],
  [
    "cheese",
    "Пицца",
    "Пять сыров с фисташками",
    610
  ],
  [
    "salami",
    "Пицца",
    "Салями, страчателла с трюфелем",
    730
  ],
  [
    "roastbeef",
    "Пицца",
    "Ростбиф с соусом тоннато",
    890
  ],
  [
    "pear",
    "Пицца",
    "Груша, горгонзола, орехи",
    590
  ],
  [
    "stracciatella",
    "Пицца",
    "Страчателла, рукола, песто",
    610
  ],
  [
    "shrimp-pizza",
    "Пицца",
    "С креветками, цукини, рикотта",
    980
  ],
  [
    "tuna-pizza",
    "Пицца",
    "С тунцом и красным луком",
    750
  ],
  [
    "amatriciana",
    "Пицца",
    "Аматричана",
    663
  ],
  [
    "pizza-carbonara",
    "Пицца",
    "Карбонара",
    710
  ],
  [
    "calzone",
    "Пицца",
    "Кальцоне с грибами и ветчиной",
    570
  ],
  [
    "nutella",
    "Пицца",
    "Nutella & banana",
    510
  ],
  [
    "lasagna",
    "Паста",
    "Лазанья болоньезе",
    710
  ],
  [
    "shrimp-pasta",
    "Паста",
    "Тальятелле с креветками и песто из фисташек",
    790
  ],
  [
    "carbonara",
    "Паста",
    "Спагетти карбонара",
    630
  ],
  [
    "tomato-pasta",
    "Паста",
    "Тальятелле с томатами и сыром страчателла",
    590
  ],
  [
    "bolognese",
    "Паста",
    "Тальятелле болоньезе",
    660
  ],
  [
    "amatriciana-pasta",
    "Паста",
    "Спагетти аматричана",
    640
  ],
  [
    "mushroom-pasta",
    "Паста",
    "Тальятелле с белыми грибами и чёрным трюфелем",
    790
  ],
  [
    "eggplant",
    "Салаты и закуски",
    "Запечённый баклажан с томатами и страчателлой",
    520
  ],
  [
    "vitello",
    "Салаты и закуски",
    "Вителло тоннато",
    620
  ],
  [
    "prosciutto-salad",
    "Салаты и закуски",
    "Салат с прошутто крудо, грушей и моцареллой",
    580
  ],
  [
    "shrimp-salad",
    "Салаты и закуски",
    "Салат с креветками и печёными овощами",
    690
  ],
  [
    "chicken-tagliata",
    "Салаты и закуски",
    "Тальята из куриной грудки",
    640
  ],
  [
    "shrimp-panini",
    "Панини",
    "Креветки, цукини и рикотта",
    560
  ],
  [
    "parma-panini",
    "Панини",
    "Парма, горгонзола и рукола",
    540
  ],
  [
    "panini",
    "Панини",
    "Ростбиф и грибы",
    530
  ],
  [
    "tuna-panini",
    "Панини",
    "Тунец, моцарелла",
    420
  ],
  [
    "roastbeef-panini",
    "Панини",
    "Ростбиф и крем-чиз",
    490
  ],
  [
    "chorizo-panini",
    "Панини",
    "Чоризо, страчателла",
    440
  ],
  [
    "chicken-panini",
    "Панини",
    "Куриная грудка, моцарелла, томаты и песто",
    490
  ],
  [
    "chicken-soup",
    "Супы",
    "Куриный суп с фрикадельками",
    340
  ],
  [
    "tomato-soup",
    "Супы",
    "Крем-суп из томатов со страчателлой",
    390
  ],
  [
    "shrimp-soup",
    "Супы",
    "Суп с креветками и красной фасолью",
    690
  ],
  [
    "focaccia",
    "Фокачча",
    "С пармезаном",
    220
  ],
  [
    "tomato-focaccia",
    "Фокачча",
    "Моцарелла и вяленые томаты",
    220
  ],
  [
    "onion-focaccia",
    "Фокачча",
    "С красным луком",
    220
  ],
  [
    "rosemary-focaccia",
    "Фокачча",
    "С розмарином",
    220
  ],
  [
    "tiramisu",
    "Десерты",
    "Тирамису классический",
    340
  ],
  [
    "fondant",
    "Десерты",
    "Шоколадный фондан",
    420
  ]
].map(([id,category,name,price])=>({id,category,name,price}));
const productInfo={"margherita":{"image":"images/margherita-board.webp","ingredients":"Томатный соус, моцарелла, базилик.","description":"Пицца с томатной основой, мягким сыром и зеленью.","board":true},"diavola":{"image":"images/diavola.webp","ingredients":"Томатный соус, моцарелла, острая салями, маслины.","description":"Пицца с салями и маслинами. Остроту нужно уточнить у пиццерии."},"roastbeef":{"image":"images/roastbeef.webp","ingredients":"Томатная основа, моцарелла, ростбиф, сладкий перец, тёртый твёрдый сыр, базилик, соус тоннато.","description":"Пицца с ломтиками ростбифа и соусом тоннато."},"salami":{"image":"images/salami.webp","ingredients":"Томатный соус, моцарелла, салями, страчателла, рукола, трюфельное масло.","description":"Пицца с салями, мягкой страчателлой и трюфельным акцентом."}};
const categories=[...new Set(dishes.map(d=>d.category))];let category='Пицца',basket={},orders=[],staff=false,nextId=1;
const $=s=>document.querySelector(s),money=n=>n.toLocaleString('ru-RU')+' ₽',esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function totals(){return Object.entries(basket).reduce((a,[id,q])=>({count:a.count+q,sum:a.sum+dishes.find(d=>d.id===id).price*q}),{count:0,sum:0})}
function qty(id){return `<div class="qty"><button data-change="${id}" data-delta="-1" aria-label="Уменьшить количество: ${esc(dishes.find(d=>d.id===id).name)}">−</button><span>${basket[id]}</span><button data-change="${id}" data-delta="1" aria-label="Увеличить количество: ${esc(dishes.find(d=>d.id===id).name)}">+</button></div>`}
function change(id,delta){if(!dishes.some(d=>d.id===id)||![-1,1].includes(delta))throw Error('Некорректная позиция');basket[id]=Math.max(0,Math.min(20,(basket[id]||0)+delta));if(!basket[id])delete basket[id];render();if($('#cart').open)renderCart();return totals()}
function render(){ $('#categories').innerHTML=categories.map(c=>`<button data-category="${c}" class="${category===c?'active':''}" aria-pressed="${category===c}">${c}</button>`).join('');$('#category-title').textContent=category;$('#category-note').textContent='';$('#menu').innerHTML=dishes.filter(d=>d.category===category).map((d,i)=>`<article class="dish ${productInfo[d.id]?'has-photo':''} ${productInfo[d.id]?.board?'is-board':''}">${productInfo[d.id]?`<button class="product-open photo-button" data-product="${d.id}" aria-label="Подробнее: ${esc(d.name)}"><img src="${productInfo[d.id].image}" alt="${esc(d.name)}" loading="lazy" width="1000" height="1503"></button><h3><button class="product-open title-button" data-product="${d.id}">${d.name}</button></h3>`:`<h3>${d.name}</h3>`}<div class="dish-bottom"><span class="price">${money(d.price)}</span>${basket[d.id]?qty(d.id):`<button class="add" data-change="${d.id}" data-delta="1" aria-label="Добавить: ${esc(d.name)}">Добавить</button>`}</div></article>`).join('');const t=totals();$('#cart-button').hidden=!t.count||staff;$('#cart-count').textContent=t.count;$('#cart-total').textContent=money(t.sum);renderOrders()}
function renderCart(){const t=totals();$('#cart-items').innerHTML=t.count?Object.entries(basket).map(([id,q])=>{const d=dishes.find(d=>d.id===id);return `<div class="cart-row"><div><strong>${d.name}</strong><small>${money(d.price*q)} · ${q} шт.</small></div>${qty(id)}</div>`}).join(''):'<p class="empty">Корзина пуста. Добавьте блюда из меню.</p>';$('#total').textContent=money(t.sum);$('#checkout').hidden=!t.count}
const status={pending:'Ожидает подтверждения',accepted:'Готовится',ready:'Готов к выдаче',done:'Выдан',rejected:'Отклонён'};
function orderHtml(o,isStaff){return `<article class="order"><div class="order-head"><h3>Тестовый заказ №${o.id}</h3><span class="status">${status[o.status]}</span></div><p>${esc(o.name)} · ${esc(o.phone)}<br>Самовывоз: ${esc(o.when)}${o.minutes?`<br>Время приготовления при подтверждении: ${o.minutes} мин.`:''}</p><ul>${o.items.map(d=>`<li>${esc(d.name)} × ${d.qty}</li>`).join('')}</ul>${o.comment?`<p>Комментарий: ${esc(o.comment)}</p>`:''}<strong>${money(o.sum)} · оплата при получении</strong>${isStaff?`<div class="order-actions">${o.status==='pending'?`<label>Готовность через <select aria-label="Время приготовления заказа ${o.id}" id="minutes-${o.id}"><option>15</option><option selected>25</option><option>40</option><option>60</option></select></label><button class="primary" data-order="${o.id}" data-status="accepted">Принять</button><button class="outline" data-order="${o.id}" data-status="rejected">Отклонить</button>`:o.status==='accepted'?`<button class="primary" data-order="${o.id}" data-status="ready">Готов к выдаче</button>`:o.status==='ready'?`<button class="primary" data-order="${o.id}" data-status="done">Выдан</button>`:''}</div>`:''}</article>`}
function renderOrders(){$('#my-orders').hidden=!orders.length;$('#order-list').innerHTML=orders.slice().reverse().map(o=>orderHtml(o,false)).join('');$('#staff-orders').innerHTML=orders.length?orders.slice().reverse().map(o=>orderHtml(o,true)).join(''):'<div class="empty">Пока нет заказов. Оформите тестовый заказ в меню, затем вернитесь сюда.</div>'}
function notify(text){$('#toast').textContent=text;$('#toast').hidden=false;clearTimeout(notify.timer);notify.timer=setTimeout(()=>$('#toast').hidden=true,4500)}
document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.product){openProduct(b.dataset.product);return}if(b.dataset.productDelta){detailQty=Math.max(1,Math.min(20,detailQty+Number(b.dataset.productDelta)));renderProductQuantity();return}if(b.dataset.change)change(b.dataset.change,Number(b.dataset.delta));if(b.dataset.category){category=b.dataset.category;render()}if(b.dataset.order){const o=orders.find(o=>o.id===Number(b.dataset.order));const transitions={pending:['accepted','rejected'],accepted:['ready'],ready:['done']};if(!o||!transitions[o.status]?.includes(b.dataset.status))return;if(b.dataset.status==='accepted')o.minutes=Number($('#minutes-'+o.id).value);o.status=b.dataset.status;renderOrders();notify('Статус тестового заказа обновлён')}});
$('#cart-button').onclick=()=>{renderCart();$('#cart').showModal()};$('#close-cart').onclick=()=>$('#cart').close();$('#mode').onclick=()=>{staff=!staff;$('#customer').hidden=staff;$('#staff').hidden=!staff;$('#mode').textContent=staff?'Вернуться в меню':'Экран сотрудника';render();window.scrollTo(0,0)};
$('#checkout').elements.when.onchange=e=>{const selected=e.target.value==='time';$('#time-label').hidden=!selected;$('#checkout').elements.time.required=selected};
$('#checkout').onsubmit=e=>{e.preventDefault();const f=new FormData(e.target),t=totals();$('#form-error').textContent='';if(!t.count)return;const phone=String(f.get('phone')).replace(/\D/g,'');if(phone.length<10||phone.length>15){$('#form-error').textContent='Укажите телефон: от 10 до 15 цифр.';return}const name=String(f.get('name')).trim();if(!name){$('#form-error').textContent='Укажите имя.';return}const when=f.get('when')==='time'?'Сегодня, '+f.get('time'):'Как можно скорее';orders.push({id:nextId++,name,phone:String(f.get('phone')),when,comment:String(f.get('comment')).trim(),items:Object.entries(basket).map(([id,qty])=>({...dishes.find(d=>d.id===id),qty})),sum:t.sum,status:'pending'});basket={};$('#cart').close();e.target.reset();$('#time-label').hidden=true;e.target.elements.time.required=false;render();notify('Тестовый заказ создан. Откройте экран сотрудника, чтобы принять его.');$('#my-orders').scrollIntoView({behavior:'smooth',block:'start'})};

let detailId=null,detailQty=1;
function renderProductQuantity(){$('#product-qty').textContent=detailQty;$('#product-add').textContent='Добавить за '+money(dishes.find(d=>d.id===detailId).price*detailQty);$('#product-minus').disabled=detailQty<=1;$('#product-plus').disabled=detailQty>=20;}
function openProduct(id){const d=dishes.find(d=>d.id===id),p=productInfo[id];if(!d||!p)throw Error('Карточка недоступна');detailId=id;detailQty=1;$('#product').classList.toggle('board-product',Boolean(p.board));$('#product-title').textContent=d.name;$('#product-image').src=p.image;$('#product-image').alt=d.name;$('#product-price').textContent=money(d.price);$('#product-description').textContent=p.description;$('#product-ingredients').textContent=p.ingredients;renderProductQuantity();$('#product').showModal();}
$('#close-product').onclick=()=>$('#product').close();
$('#product-add').onclick=()=>{if(!detailId)return;const current=basket[detailId]||0;if(current+detailQty>20){$('#product-feedback').textContent='В корзине может быть не больше 20 одинаковых пицц.';return}basket[detailId]=current+detailQty;render();$('#product').close();notify('Добавлено в корзину');};
$('#product').addEventListener('close',()=>{$('#product-feedback').textContent='';});

if(document.modelContext?.registerTool){const controller=new AbortController();for(const tool of [{name:'read_demo_menu',description:'Read available demo dishes and prices.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true},execute:()=>({dishes,basket:totals(),testOnly:true})},{name:'add_demo_dish_to_cart',description:'Add one demo dish to the visible cart; does not submit an order.',inputSchema:{type:'object',properties:{id:{type:'string'}},required:['id'],additionalProperties:false},execute:input=>{if(!input||typeof input.id!=='string')throw Error('Required dish id');return change(input.id,1)}}]){try{Promise.resolve(document.modelContext.registerTool(tool,{signal:controller.signal})).catch(()=>{})}catch{}}window.addEventListener('pagehide',()=>controller.abort(),{once:true})}
render();

if(window.finishAppLoading)window.finishAppLoading();
