// import List from "./List";
import React from 'react';
import './titleStyles.css';

function Title(props) {
    const { name } = props
    return (
        <>
            {/* <h1 className='heading'>Welcome to TatvaSoft EBook-Store!</h1> */}
            {/* <h2>Sculpt Your Thoughts TO REALITY</h2> */}
            <h3>{name}</h3>
            {/* <div className='description'>Description<br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, tempore ex consequatur accusantium minima molestias eveniet doloribus beatae dolorem, ratione dolores, alias voluptate laudantium deserunt provident voluptatibus error facilis vero?
                Necessitatibus, quia quae esse neque ipsum iusto nulla suscipit eos magnam voluptas. Quasi voluptatibus veniam eligendi commodi tenetur nihil labore voluptas illum accusantium delectus fugit quae, quibusdam ratione amet. Voluptate.
                Aut doloribus minus cum, ullam commodi hic repellendus non tenetur culpa illo. Maiores omnis veniam pariatur necessitatibus quia ad ducimus quam adipisci. Natus corporis deserunt ipsa! Quaerat provident obcaecati culpa?
                Numquam officiis magnam neque quibusdam commodi quidem ea eos. Cupiditate possimus ipsam architecto harum sunt eos aliquid inventore perferendis, nesciunt quasi eveniet veritatis eaque autem tempora, reiciendis veniam ipsa nihil.
                Voluptatum, necessitatibus. Cumque nesciunt ratione autem, incidunt, animi deserunt maiores recusandae odit fugit aperiam eos vitae maxime dolorum officia facere velit pariatur veniam nisi optio facilis sunt nemo cupiditate? Sequi.
                Temporibus labore delectus pariatur porro. Cum esse tempora sapiente quam repudiandae deleniti vel praesentium delectus repellendus doloribus aliquid officiis eos, nisi numquam, est rem et a, consectetur laboriosam fuga eum?
                Optio pariatur est nulla quia explicabo ducimus iure molestias totam, magnam, reiciendis, porro doloribus sequi. Necessitatibus, vitae reprehenderit saepe in iusto cumque dignissimos, omnis mollitia corporis laborum facilis optio suscipit.
                Et ratione deserunt praesentium voluptates aliquam ducimus odit ex esse nostrum blanditiis fugiat aut, fuga laborum. Nam, magni quam accusantium repudiandae, libero excepturi iure dolorem suscipit culpa doloremque, eum repellendus.
                Repellendus corporis, consectetur repudiandae optio explicabo aliquid cupiditate deserunt ipsa a blanditiis sapiente sint expedita maiores ratione quas alias minus aut fugit, odio saepe neque non. Obcaecati, asperiores officia. Assumenda.
                Similique facilis aut eveniet doloribus suscipit asperiores at in minus obcaecati illum, amet nesciunt a laborum totam incidunt saepe. Enim rem repellat eaque illum nisi ut et possimus fuga laboriosam.
            </div> */}
            {/* <List /> */}
        </>
    )
}

export default React.memo(Title);