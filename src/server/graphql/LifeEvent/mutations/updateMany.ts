import { mutationField, nonNull } from 'nexus'

export const LifeEventUpdateManyMutation = mutationField(
  'updateManyLifeEvent',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'LifeEventWhereInput',
      data: nonNull('LifeEventUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.lifeEvent.updateMany(args as any)
    },
  },
)
