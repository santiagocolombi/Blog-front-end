import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeletePostButton = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPostId, setSelectedPostId] = useState(null);
    const [showDeleteList, setShowDeleteList] = useState(false);

    // Função para buscar os posts do banco de dados
    const fetchPosts = async () => {
        try {
            const response = await axios.get('http://localhost:3000/posts');
            setPosts(response.data);
        } catch (error) {
            console.error('Erro ao buscar os posts:', error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    // Função para deletar o post selecionado
    const handleDeletePost = async () => {
        if (selectedPostId) {
            try {
                await axios.delete(`http://localhost:3000/posts/${selectedPostId}`); // Deleta o post no backend
                setPosts(posts.filter(post => post.id !== selectedPostId)); // Atualiza a lista de posts
                setSelectedPostId(null); // Limpa a seleção após deletar
            } catch (error) {
                console.error('Erro ao deletar o post:', error);
            }
        }
    };

    return (
        <div>
            <button
                style={{ marginRight: '10px' }}
                onClick={() => setShowDeleteList(!showDeleteList)} // Alterna a visibilidade da lista de posts
            >
                Deletar Post
            </button>

            {showDeleteList && (
                <div>
                    <small>Selecione um Post para Deletar</small>
                    <ul>
                        {posts.length === 0 ? (
                            <p>Nenhum post encontrado</p>
                        ) : (
                            posts.map((post) => (
                                <li
                                    key={post.id}
                                    onClick={() => setSelectedPostId(post.id)} // Marca o post selecionado
                                    style={{
                                        cursor: 'pointer',
                                        backgroundColor: selectedPostId === post.id ? 'lightgray' : 'transparent',
                                    }}
                                >
                                    {post.title}
                                </li>
                            ))
                        )}
                    </ul>
                    <button
                        onClick={handleDeletePost}
                        style={{ backgroundColor: 'red', color: 'white' }}
                    >
                        Confirmar Deleção
                    </button>
                </div>
            )}
        </div>
    );
};

export default DeletePostButton;
