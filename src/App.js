import React, { useMemo } from 'react';

const users = [
  { id: 'a', name: 'Mesut' },
  { id: 'b', name: 'Saynur' },
  { id: 'c', name: 'Sibel' },
  { id: 'd', name: 'Bilge' },
  { id: 'e', name: 'Merve' },
  { id: 'f', name: 'Evin' },
  { id: 'g', name: 'Zeliha' },
  { id: 'h', name: 'Hamza' },
  { id: 'i', name: 'Betül' },
  { id: 'j', name: 'Kuzey' },
];

const App = () => {
  //Kullanıcının search kısmına yazdığı kelime
  const [text, setText] = React.useState('');

  // Kullanıcı search butonuna bastıktan sonra kelime searche kaydediliyor
  const [search, setSearch] = React.useState('');

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleSearch = () => {
    setSearch(text);
  };

  // Yukarda users kısmında tanımlı olan userlar search edildikten sonra içinde bulunduruyorsa burda 
  // true işlemi gerçekleşir.
  // Filter değerini sadece search değiştiğinde hesaplanmasını sağlamak
  const filteredUsers = useMemo(() => users.filter((user) => {
    console.log('Filter function is running ...');
    return user.name.toLowerCase().includes(search.toLowerCase());
  }), [search])
  // useMemoyu kullandıktan sonra bir dependancy array yani search arrayini yazıyoruz, 
  // yani sadece search state'i değiştiğinde useMemo buradaki filter işlemini yeniden çalıştırsın 

  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleSearch}>
        Search
      </button>

      <List list={filteredUsers} />
    </div>
  );
};

const List = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const ListItem = ({ item }) => {
  return <li>{item.name}</li>;
};

export default App;