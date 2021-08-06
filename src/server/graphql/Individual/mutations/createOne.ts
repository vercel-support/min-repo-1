import { mutationField, nonNull } from 'nexus'

export const IndividualCreateOneMutation = mutationField(
  'createOneIndividual',
  {
    type: nonNull('Individual'),
    args: {
      data: nonNull('IndividualCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.individual.create({
        data,
        ...select,
      })
    },
  },
)
