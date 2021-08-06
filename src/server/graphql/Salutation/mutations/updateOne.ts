import { mutationField, nonNull } from 'nexus'

export const SalutationUpdateOneMutation = mutationField(
  'updateOneSalutation',
  {
    type: nonNull('Salutation'),
    args: {
      where: nonNull('SalutationWhereUniqueInput'),
      data: nonNull('SalutationUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.salutation.update({
        where,
        data,
        ...select,
      })
    },
  },
)
