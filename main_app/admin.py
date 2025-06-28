from django.contrib import admin
from .models import *
# Register your models here.

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'message')
    search_fields = ('name', 'email')

admin.site.register(ProjectTag)

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('project_image', 'project_category', 'project_title', 'project_description', 'list_project_tags','featured_projects', 'project_link', 'project_github')
    search_fields = ('project_category', 'project_title', 'list_project_tags')
    list_filter = ('project_category',)

    def list_project_tags(self, obj):
        return ", ".join([project_tag.name for project_tag in obj.project_tags.all()])

    list_project_tags.short_description = 'Project Tags'

admin.site.register(Skill)

@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ('name', 'role', 'image', 'description', 'list_skills')
    search_fields = ('name', 'role')

    def list_skills(self, obj):
        return ", ".join([skill.name for skill in obj.skills.all()])

    list_skills.short_description = 'Skills'