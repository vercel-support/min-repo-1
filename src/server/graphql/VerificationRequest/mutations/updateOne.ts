import { mutationField, nonNull } from 'nexus'

export const VerificationRequestUpdateOneMutation = mutationField(
  'updateOneVerificationRequest',
  {
    type: nonNull('VerificationRequest'),
    args: {
      where: nonNull('VerificationRequestWhereUniqueInput'),
      data: nonNull('VerificationRequestUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.verificationRequest.update({
        where,
        data,
        ...select,
      })
    },
  },
)
