"""empty message

Revision ID: 2218ed157d83
Revises: e93d4e9b897e
Create Date: 2022-11-01 18:23:35.144648

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2218ed157d83'
down_revision = 'e93d4e9b897e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('medico',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=120), nullable=False),
    sa.Column('telefono', sa.Integer(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('nombre'),
    sa.UniqueConstraint('telefono')
    )
    op.drop_constraint('user_vet_id_fkey', 'user', type_='foreignkey')
    op.drop_column('user', 'vet_id')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('vet_id', sa.INTEGER(), autoincrement=False, nullable=True))
    op.create_foreign_key('user_vet_id_fkey', 'user', 'veterinaria', ['vet_id'], ['id'])
    op.drop_table('medico')
    # ### end Alembic commands ###
