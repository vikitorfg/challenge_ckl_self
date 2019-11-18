from rest_framework import serializers
from .models import Subject, Author, Article

class SubjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Subject
        fields = ('id', 'name', 'color')

class AuthorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Author
        fields = ('id', 'name', 'picture')

class ArticleSerializer(serializers.ModelSerializer):
    text = serializers.SerializerMethodField('get_text')

    class Meta:
        model = Article
        fields = ('title', 'slug', 'publish_date', 'hero_image', 'author', 'subject', 'text')
        depth = 2
    
    def get_text(self, obj):
        text_caped = obj.text
        text_caped = text_caped[:200]

        return text_caped

        # TODO should be paginated