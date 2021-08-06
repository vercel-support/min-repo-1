import { mutationField, nonNull } from 'nexus'

export const IndividualTypeUpsertOneMutation = mutationField(
  'upsertOneIndividualType',
  {
    type: nonNull('IndividualType'),
    args: {
      where: nonNull('IndividualTypeWhereUniqueInput'),
      create: nonNull('IndividualTypeCreateInput'),
      update: nonNull('IndividualTypeUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.individualType.upsert({
        ...args,
        ...select,
      })
    },
  },
)
