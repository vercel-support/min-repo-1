import { mutationField, nonNull } from 'nexus'

export const IndividualUpsertOneMutation = mutationField(
  'upsertOneIndividual',
  {
    type: nonNull('Individual'),
    args: {
      where: nonNull('IndividualWhereUniqueInput'),
      create: nonNull('IndividualCreateInput'),
      update: nonNull('IndividualUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.individual.upsert({
        ...args,
        ...select,
      })
    },
  },
)
