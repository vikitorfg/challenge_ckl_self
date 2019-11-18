from rest_framework import viewsets, mixins

from .models import Subject, Author, Article
from .serializers import SubjectSerializer, AuthorSerializer, ArticleSerializer

class SubjectViewSet(viewsets.GenericViewSet,
                     mixins.ListModelMixin):

    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer
    pagination_class = None

class AuthorViewSet(viewsets.GenericViewSet,
                    mixins.ListModelMixin):

    queryset = Author.objects.all()
    serializer_class = AuthorSerializer

class ArticleViewSet(viewsets.GenericViewSet,
                     mixins.ListModelMixin):

    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    filterset_fields = ('subject__name', 'author__name' )
    