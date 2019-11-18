from django.db import models

# happy reviewing
class Subject(models.Model):
    name = models.CharField(max_length=255)
    color = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Author(models.Model):
    name = models.CharField(max_length=255)
    picture = models.ImageField(upload_to='pictures/')

    def __str__(self):
        return self.name

class Article(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)

    hero_image = models.ImageField(upload_to='hero_images')

    publish_date = models.DateField()
    text = models.TextField()

    class Meta:
        ordering = ['-publish_date']

    def __str__(self):
        return self.title