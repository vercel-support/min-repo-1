import { mutationField, nonNull } from 'nexus'

export const IndividualUpdateManyMutation = mutationField(
  'updateManyIndividual',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'IndividualWhereInput',
      data: nonNull('IndividualUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.individual.updateMany(args as any)
    },
  },
)
