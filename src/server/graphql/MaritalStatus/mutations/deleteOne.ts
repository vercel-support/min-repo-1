import { mutationField, nonNull } from 'nexus'

export const MaritalStatusDeleteOneMutation = mutationField(
  'deleteOneMaritalStatus',
  {
    type: 'MaritalStatus',
    args: {
      where: nonNull('MaritalStatusWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.maritalStatus.delete({
        where,
        ...select,
      })
    },
  },
)
