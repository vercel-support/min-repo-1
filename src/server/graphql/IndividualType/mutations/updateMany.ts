import { mutationField, nonNull } from 'nexus'

export const IndividualTypeUpdateManyMutation = mutationField(
  'updateManyIndividualType',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'IndividualTypeWhereInput',
      data: nonNull('IndividualTypeUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.individualType.updateMany(args as any)
    },
  },
)
