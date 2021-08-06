import { mutationField, nonNull } from 'nexus'

export const VerificationRequestCreateOneMutation = mutationField(
  'createOneVerificationRequest',
  {
    type: nonNull('VerificationRequest'),
    args: {
      data: nonNull('VerificationRequestCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.verificationRequest.create({
        data,
        ...select,
      })
    },
  },
)
