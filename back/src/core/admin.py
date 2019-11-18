from django.contrib import admin

from .models import Subject, Author, Article

class SubjectAdmin(admin.ModelAdmin):
    list_display = ('name', 'color')

class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'subject', 'publish_date', 'author')
    list_filter = ('subject', 'author')
    search_fields = ('title', 'text')


admin.site.register(Subject, SubjectAdmin)
admin.site.register(Author)
admin.site.register(Article, ArticleAdmin)