from django.db import models

# Create your models here.

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()

    def __str__(self):
        return f"{self.name} - {self.email}"
    
class ProjectTag(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name    
    
class Project(models.Model):
    project_image = models.ImageField(upload_to='projects/')
    project_category = models.CharField(max_length=100)
    project_title = models.CharField(max_length=200)
    project_description = models.TextField()
    project_tags = models.ManyToManyField(ProjectTag, related_name='projects')
    project_link = models.URLField(blank=True, null=True)
    project_github = models.URLField(blank=True, null=True)
    featured_projects = models.BooleanField(default=False)

class Skill(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
class TeamMember(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    image = models.ImageField(upload_to='team/')
    description = models.TextField()
    skills = models.ManyToManyField(Skill, related_name='team_members')
    
    def __str__(self):
        return self.name