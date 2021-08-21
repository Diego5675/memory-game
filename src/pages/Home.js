const Home = async () => {
  const view = `
    <div class="logo">
      <svg>
        <use href='./images/logo.svg#test'></use>
      </svg>
    </div>
    <a href='#/easy/' class="btn-difficulty" id='easy'>Easy</a>
    <a href='#/normal/' class="btn-difficulty">Normal</a>
    <a href='#/hard/' class="btn-difficulty">Hard</a>
   `;

  return view;
};

export default Home;
