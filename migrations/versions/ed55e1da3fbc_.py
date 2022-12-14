"""empty message

Revision ID: ed55e1da3fbc
Revises: a0da805e8561
Create Date: 2022-11-05 00:49:04.846982

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ed55e1da3fbc'
down_revision = 'a0da805e8561'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('agenda', 'direccion_retiro',
               existing_type=sa.VARCHAR(length=250),
               nullable=True)
    op.add_column('ficha__medica', sa.Column('medico_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'ficha__medica', 'medico', ['medico_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'ficha__medica', type_='foreignkey')
    op.drop_column('ficha__medica', 'medico_id')
    op.alter_column('agenda', 'direccion_retiro',
               existing_type=sa.VARCHAR(length=250),
               nullable=False)
    # ### end Alembic commands ###
