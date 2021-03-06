#version 330 core

uniform sampler2D img;

in Vertex
{
    vec2 uv;
} vertex;

out vec4 color;

void main()
{
    color = texture(img, vertex.uv);
}
