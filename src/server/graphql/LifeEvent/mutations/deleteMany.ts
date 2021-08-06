import { mutationField, nonNull } from 'nexus'

export const LifeEventDeleteManyMutation = mutationField(
  'deleteManyLifeEvent',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'LifeEventWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.lifeEvent.deleteMany({ where } as any)
    },
  },
)
