import { mutationField, nonNull } from 'nexus'

export const IndividualTypeDeleteManyMutation = mutationField(
  'deleteManyIndividualType',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'IndividualTypeWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.individualType.deleteMany({ where } as any)
    },
  },
)
